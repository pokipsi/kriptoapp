export default class AlertsManager{
    static async get(){
        return new Promise((resolve) => {
            fetch('/api/alerts').then(response => response.json()).then(json => {
                resolve(json);
            });
        });
    }
    static insert(obj){
        return new Promise(resolve => {
            fetch('/api/alerts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    value: parseFloat(obj.value),
                    type: obj.type
                })
            }).then(response => response.json()).then(() => {
                resolve();
            });
        });
    }
    static update(obj){
        return new Promise((resolve) => {
            fetch(`/api/alerts/${obj._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    value: parseFloat(obj.value),
                    type: obj.type,
                    status: obj.status
                })
            }).then(response => response.json()).then(() => {
                resolve();
            });
        });
    }
    static async delete(id){
        return new Promise((resolve) => {
            fetch(`/api/alerts/${id}`, {
                method: 'DELETE'
            }).then(response => response.json()).then(() => {
                resolve();
            });
        });
    }
}