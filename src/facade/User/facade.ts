import { IUserFacade } from "./interface";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        try {
            console.log('FindAll');
            throw new Error('Error desconocido');
            return [1,2,3];
        } catch (error) {
            console.log('ErrorP', error);
            throw new Error(error.message);
        }
    }
}

export default UserFacade;