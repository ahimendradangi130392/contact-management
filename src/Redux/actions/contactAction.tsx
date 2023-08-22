
import * as actionTypes from './actionTypes';
const CreateContact = (contact: any) => {
    console.log('contactcontactcontact', contact)
    return {
        type: actionTypes.CREATE_NEW_CONTACT,
        contact: contact
    }
};
export default CreateContact;