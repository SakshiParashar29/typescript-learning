// Promise with TypeScript

// usually use Promise<T> but since we know the type what will resolve return that's why we initialised type with number and string


function fetchUser(id: number): Promise<{id: number, name: string}>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id, name: "Piyush"});
        }, 1000);
    })
};

// async await 
async function getUserData(id: number) : Promise<void> {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    } catch (error) {
        console.error("Error fetching user: ", error);
    }
}

// generic async function
async function fetchData<T>(url:string) : Promise<T> {
    const response = await fetch(url);
    return response.json();
}

