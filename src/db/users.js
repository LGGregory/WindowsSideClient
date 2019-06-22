import axios from 'axios'


export function createUser(info) {

    axios.post('/api/user/login', info)
        .then((response) => {
            var status = response.status;
            if (status === 201) {
                //Account created
                return true;
            } else {
                return false;
            }
        });
        
}



export function loginUser(info) {

    axios.post('/api/user/login', info)
        .then((response) => {
            var status = response.status;
            if (status === 201) {
                //Account created
                return true;
            } else {
                return false;
            }
        });

}