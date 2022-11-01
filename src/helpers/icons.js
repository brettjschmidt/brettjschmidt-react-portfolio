import { 
    faTrash, 
    faSignOutAlt, 
    faPenToSquare, 
    faSpinner,
    faCloudArrowUp,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faPenToSquare, faSpinner, faCloudArrowUp, faPhone, faEnvelope, faMapMarkedAlt, faLock)
};

export default Icons;