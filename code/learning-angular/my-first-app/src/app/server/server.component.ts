import { Component } from "@angular/core";

@Component({
    selector: 'server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId() {
        return Math.round(Math.random() * 100);
    }
}
