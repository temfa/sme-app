import { uploadIdDocType } from '../types/actionTypes';

const initialState = {
    isLoading: false,
    identification: null,
    identificationErrorMessages: null
};

const documentIdentificationReducer = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case uploadIdDocType.GET_ID_DOCUMENTATION_START:
            return {
                ...state,
                isLoading: true,
                identification: null,
                identificationErrorMessages: null
            };
        case uploadUtilityDocumentype.GET_UTILITY_DOCUMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                identification: payload
            };
        case uploadUtilityDocumentype.GET_UTILITY_DOCUMENT_ERROR:
            return {
                ...state,
                isLoading: false,
                identificationErrorMessages: payload
            };

        default:
            return state;
    }
};

export default documentIdentificationReducer;
