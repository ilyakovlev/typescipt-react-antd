export const login = (login: string, password: string): Promise<Response> => {
    const reqOptions: RequestInit = {
        body: JSON.stringify({
            login, password
        }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
    };

    return fetch('url', reqOptions)
        .then((res: Response): Promise<Response> => {
            if(res.ok) {
                return res.json();
            }
            throw new Error(res.statusText)
        })
        .then((user: any) =>{
            if(user.token){
                localStorage.setItem('user', JSON.stringify(user));
            }
            return Promise.resolve(user);
        })
        .catch((err: Error) =>{
            // tslint:disable-next-line:no-console
            console.log("Got error: ", err);
            return Promise.reject(err)
        })
};


export const logout = (): void => {
    localStorage.removeItem('user');
};
