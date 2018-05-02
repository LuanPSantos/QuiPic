import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserItem } from './user-item.model';

@Component({
    selector: 'app-user-item',
    templateUrl: 'user-item.component.html',
})
export class UserItemComponent {

    @Input()
    user: UserItem;
    @Output()
    nameClick: EventEmitter<any> = new EventEmitter();
    @Output()
    toggleFollow: EventEmitter<any> = new EventEmitter();

    constructor(
    ) {

    }

    onNameClick(){
        this.nameClick.emit();
    }

    toggleFollowClick(){
        this.toggleFollow.emit();
    }

}


