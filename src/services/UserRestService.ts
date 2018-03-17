import {User} from 'models';
import {FirebaseRestService} from 'services/FirebaseRestService';

export interface UserSubscribeUpdate {
  type: string;
  updated: User;
}

export class UserRestService {
  private static instance: UserRestService;
  private collectionStore: FirebaseRestService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserRestService();
    }

    return this.instance;
  }

  constructor() {
    this.collectionStore = new FirebaseRestService('users');
  }

  public setUser = async (user: User) => {
    return this.collectionStore.set(user.uid, user);
  };
}