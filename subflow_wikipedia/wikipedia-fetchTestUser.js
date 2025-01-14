const getUserFromAPI = () => {
    const URL = 'https://jsonplaceholder.typicode.com/users/1';
    const response = http.get(URL);
    const data = json(response.body);

    return {
        username: data.username,
        email: data.email 
    }
} 

output.test_user = getUserFromAPI();