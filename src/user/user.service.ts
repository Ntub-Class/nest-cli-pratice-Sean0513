import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getAllUser() {
        return "getAllUser";
    }

    getOneUser(id: string) {
        return "getOneUser:" + id;
    }

    postUser(body: any) {
        return "PostUser";
    }

    putUser(body: any, id: string) {
        return "PutUser " + id;
    }

    delUser(id: string) {
        return "delete User:" + id;
    }
}
