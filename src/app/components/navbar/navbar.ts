import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalMembership } from '../modal-membership/modal-membership';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ModalMembership, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() showModal: boolean = false;
  @Output() modalStatusEmit = new EventEmitter<boolean>();
  showMobileNav = false;

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }

  modalClick() {
    this.showModal = true;
  }

  modalStatus(status: boolean) {
    this.showModal = status;
  }

  closeModal() {
    this.showModal = false;
    this.modalStatusEmit.emit(this.showModal);
  }
}
