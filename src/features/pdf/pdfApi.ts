import {Alert} from 'react-native';
import axios from '../../axios';
import {AppDispatch, RootState} from '../store';
import {
  getAllPdfSuccess,
  getPdfFailure,
  getPdfRequest,
  getPdfSuccess,
  Pdf,
} from './pdfSlice';

export const getAllPdfs =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    let state = getState();
    dispatch(getPdfRequest());
    try {
      const pdfs = await axios.get(`/pdf/user/${state.userReducer.user._id}`);
      const docx = await axios.get(`/docx/user/${state.userReducer.user._id}`);
      let pdfsArray: Pdf[];
      if (pdfs.data.data !== undefined) {
        pdfsArray = pdfs.data.data.map((pdf: any): Pdf => {
          return {
            _id: pdf._id,
            userId: pdf.userId,
            content: pdf.file,
            title: pdf.title,
            type: 'pdf',
            createdAt: pdf.createdAt,
            updatedAt: pdf.updatedAt,
          };
        });
      } else {
        pdfsArray = [];
      }
      let docxArray: Pdf[];
      if (docx.data.data !== undefined) {
        docxArray = docx.data.data.map((docx: any): Pdf => {
          return {
            _id: docx._id,
            userId: docx.userId,
            content: docx.docxText,
            title: docx.title,
            type: 'docx',
            createdAt: docx.createdAt,
            updatedAt: docx.updatedAt,
          };
        });
      } else {
        docxArray = [];
      }
      const allPdfs: Pdf[] = [...docxArray, ...pdfsArray];
      dispatch(getAllPdfSuccess(allPdfs));
    } catch (error: any) {
      console.log(error);
      dispatch(getPdfFailure(error.message));
      Alert.alert('Error', 'Something went wrong', [
        {text: 'cancel'},
        {text: 'retry', onPress: () => dispatch(getAllPdfs())},
      ]);
    }
  };

export const getPdf =
  (id: string, type: string) => async (dispatch: AppDispatch) => {
    dispatch(getPdfRequest());
    try {
      const pdf = await axios.get(`/${type}/${id}`);

      if (pdf.data.statuscode === 200) {
        dispatch(
          getPdfSuccess({
            _id: pdf.data.data._id,
            userId: pdf.data.data.userId,
            content: pdf.data.data.file || pdf.data.data.docxText,
            title: pdf.data.data.title,
            type: pdf.data.data.type,
            createdAt: pdf.data.data.createdAt,
            updatedAt: pdf.data.data.updatedAt,
          }),
        );
      } else {
        dispatch(getPdfFailure(pdf.data.message));
      }
    } catch (error: any) {
      console.log(error);
      dispatch(getPdfFailure(error.message));
      Alert.alert('Error', 'Something went wrong', [
        {text: 'cancel'},
        {text: 'retry', onPress: () => dispatch(getPdf(id, type))},
      ]);
    }
  };
