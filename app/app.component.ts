import {Component, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/observable';
import {GithubService} from './github.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers:[GithubService]  
})
export class AppComponent {
    items: Observable<Array<any>>;
    query: Control = new Control();

    constructor(private _githubService: GithubService) {
        this.items = this._githubService.findRepositories(this.query.valueChanges);
    }
}
