import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-membership',
  imports: [CommonModule],
  templateUrl: './modal-membership.html',
  styleUrl: './modal-membership.css',
})
export class ModalMembership {
  @Input() showModal: boolean = false;
  @Output() modalStatus = new EventEmitter<boolean>();

  closeModal() {
    this.showModal = false;
    this.modalStatus.emit(this.showModal);
  }
}
