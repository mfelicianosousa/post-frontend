import axios from 'axios';

class Post{

   async create(formData){

        const url = "http://localhost:3333/api/create-post";
        const config ={
            headers:{
                'content-Type': 'multipart/form-data',

            }
        };
        try {
           const response = await axios.post(url,formData, config);
           return { data: response.data }
           
        } catch (error) {
            console.error('Erro ao criar post:', error);
            throw error

        }
    }
    getPosts(){
        const url = "http://localhost:3333/api/get-post";

        try {
 
           const response = axios.get(url);
           return response;

           
        } catch (error) {
            console.error('Erro ao ler post:', error);
            throw error

        }
    }
    async deletePost( id ){

        const url = `http://localhost:3333/api/delete-post/${id}`;
        
        await axios.delete(url)
          .then(response =>{
            
             console.log(`deleted post with ID ${id}`);
          })
          .catch(error =>{
            console.log(error)
          });
    }

    async update(formData){

        const url = "http://localhost:3333/api/update-post";
        const config ={
            headers:{
                'content-Type': 'multipart/form-data',

            }
        };
        try {
           const response = await axios.put(url,formData, config);
           return { data: response.data }
           
        } catch (error) {
            console.error('Erro ao criar post:', error);
            throw error

        }
    }
}
const postInstance = new Post(); 

export default postInstance;