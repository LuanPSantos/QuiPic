import { Component, Input } from '@angular/core';
import { UserItem } from './user-item.model';

@Component({
    selector: 'app-user-item',
    templateUrl: 'user-item.component.html',
})
export class UserItemComponent {

    @Input()
    user: UserItem;

    constructor(
    ) {

    }

}


