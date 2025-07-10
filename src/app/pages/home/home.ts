import { Component } from '@angular/core';
import { ModalMembership } from '../../components/modal-membership/modal-membership';
import { RouterModule } from '@angular/router';
import { UpcomingEvents } from '../../components/upcoming-events/upcoming-events';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';

export const imgData = [
  {
    title: 'Event 1',
    images: [
      'assets/event-gallery/Event 1/img1.JPG',
      'assets/event-gallery/Event 1/img2.JPG',
      'assets/event-gallery/Event 1/img3.JPG',
      'assets/event-gallery/Event 1/img4.JPG',
      'assets/event-gallery/Event 1/img5.JPG',
      'assets/event-gallery/Event 1/img6.JPG',
    ],
  },
  {
    title: 'Event 2',
    images: [
      'assets/event-gallery/Event 2/img1.JPG',
      'assets/event-gallery/Event 2/img2.jpeg',
      'assets/event-gallery/Event 2/img3.jpeg',
    ],
  },
  {
    title: 'Event 3',
    images: [
      'assets/event-gallery/Event 3/img1.JPG',
      'assets/event-gallery/Event 3/img2.JPG',
      'assets/event-gallery/Event 3/img3.JPG',
      'assets/event-gallery/Event 3/img4.JPG',
      'assets/event-gallery/Event 3/img5.JPG',
      'assets/event-gallery/Event 3/img6.JPG',
      'assets/event-gallery/Event 3/img7.JPG',
      'assets/event-gallery/Event 3/img8.JPG',
      'assets/event-gallery/Event 3/img9.JPG',
      'assets/event-gallery/Event 3/img10.JPG',
      'assets/event-gallery/Event 3/img11.JPG',
      'assets/event-gallery/Event 3/img12.JPG',
      'assets/event-gallery/Event 3/img13.jpeg',
      'assets/event-gallery/Event 3/img13.jpeg',
      'assets/event-gallery/Event 3/img15.jpeg',
      'assets/event-gallery/Event 3/img16.jpeg',
      'assets/event-gallery/Event 3/img17.jpeg',
      'assets/event-gallery/Event 3/img18.jpeg',
      'assets/event-gallery/Event 3/img19.jpeg',
    ],
  },
  {
    title: 'Event 4',
    images: [
      'assets/event-gallery/Event 4/img1.JPG',
      'assets/event-gallery/Event 4/img2.jpg',
      'assets/event-gallery/Event 4/img3.jpg',
      'assets/event-gallery/Event 4/img4.jpg',
      'assets/event-gallery/Event 4/img5.jpg',
      'assets/event-gallery/Event 4/img6.jpg',
      'assets/event-gallery/Event 4/img7.jpg',
      'assets/event-gallery/Event 4/img8.JPG',
      'assets/event-gallery/Event 4/img9.JPG',
      'assets/event-gallery/Event 4/img10.JPG',
      'assets/event-gallery/Event 4/img11.JPG',
      'assets/event-gallery/Event 4/img12.JPG',
      'assets/event-gallery/Event 4/img13.JPG',
      'assets/event-gallery/Event 4/img14.JPG',
      'assets/event-gallery/Event 4/img15.jpg',
      'assets/event-gallery/Event 4/img16.JPG',
      'assets/event-gallery/Event 4/img17.JPG',
      'assets/event-gallery/Event 4/img18.JPG',
      'assets/event-gallery/Event 4/img19.JPG',
      'assets/event-gallery/Event 4/img20.JPG',
      'assets/event-gallery/Event 4/img21.JPG',
      'assets/event-gallery/Event 4/img22.JPG',
      'assets/event-gallery/Event 4/img23.JPG',
      'assets/event-gallery/Event 4/img24.JPG',
      'assets/event-gallery/Event 4/img25.JPG',
      'assets/event-gallery/Event 4/img26.JPG',
      'assets/event-gallery/Event 4/img27.JPG',
      'assets/event-gallery/Event 4/img28.JPG',
      'assets/event-gallery/Event 4/img29.JPG',
      'assets/event-gallery/Event 4/img30.JPG',
      'assets/event-gallery/Event 4/img31.JPG',
      'assets/event-gallery/Event 4/img32.JPG',
      'assets/event-gallery/Event 4/img33.JPG',
      'assets/event-gallery/Event 4/img34.JPG',
      'assets/event-gallery/Event 4/img35.JPG',
      'assets/event-gallery/Event 4/img36.jpg',
      'assets/event-gallery/Event 4/img37.jpg',
    ],
  },
  {
    title: 'Event 5',
    images: [
      'assets/event-gallery/Event 5/img1.jpg',
      'assets/event-gallery/Event 5/img2.jpg',
      'assets/event-gallery/Event 5/img3.jpg',
      'assets/event-gallery/Event 5/img5.JPG',
      'assets/event-gallery/Event 5/img5.JPG',
      'assets/event-gallery/Event 5/img6.JPG',
      'assets/event-gallery/Event 5/img7.jpg',
      'assets/event-gallery/Event 5/img8.jpg',
      'assets/event-gallery/Event 5/img9.jpg',
      'assets/event-gallery/Event 5/img10.jpg',
      'assets/event-gallery/Event 5/img11.jpg',
    ],
  },
];

@Component({
  selector: 'app-home',
  imports: [
    ModalMembership,
    UpcomingEvents,
    RouterModule,
    CommonModule,
    Navbar,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {
  showModal: boolean = false;
  isMenuOpen: boolean = false;
  imgData = imgData;

  modalClick() {
    this.showModal = true;
  }

  modalStatus(status: boolean) {
    this.showModal = status;
  }
}
