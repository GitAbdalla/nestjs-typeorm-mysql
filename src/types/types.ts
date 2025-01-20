export type CreateUserParams = {
  username: string;
  password: string;
};
export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
    first_name: string;

    last_name: string;
    
    age: number;
    
    dob: string;
};

export type CreateUserPostParams ={
    title: string;
    description: string
}