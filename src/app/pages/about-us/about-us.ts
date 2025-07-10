import { Component } from '@angular/core';
import { ModalMembership } from '../../components/modal-membership/modal-membership';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-about-us',
  imports: [ModalMembership, Navbar],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  showModal: boolean = false;

  modalClick() {
    this.showModal = true;
  }

  modalStatus(status: boolean) {
    this.showModal = status;
  }
}
