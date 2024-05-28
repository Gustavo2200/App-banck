import { Component } from '@angular/core';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-modal-loading',
  templateUrl: './modal-loading.component.html',
  styleUrl: './modal-loading.component.css'
})
export class ModalLoadingComponent {

  constructor(public loadService: LoadingService) { }

}
