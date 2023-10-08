export interface IUser {
    id: number;
    name: string;
    email: string;
};

export type IRequestUser = Omit<IUser, 'id'>;
