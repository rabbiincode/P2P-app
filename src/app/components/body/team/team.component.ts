import { Component, Input } from '@angular/core';
import { Team } from '../../interfaces/body';

@Component({
  selector: 'cashMingle-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent {
  @Input() scrollPagePosition!: string
  team: Team[] = [
    {
      name: 'Bennett C. Gray',
      position: 'Manager/ CEO',
      image: 'assets/images/team/team1.jpg',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com',
      animation: 'animate__animated animate__fadeInTopLeft'
    },
    {
      name: 'Charles O. Smith',
      position: 'CTO',
      image: 'assets/images/team/team2.jpg',
      facebook: 'http://www.facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com',
      animation: 'animate__animated animate__rotateIn'
    },
    {
      name: 'Donald Will',
      position: 'Team Lead',
      image: 'assets/images/team/team3.jpg',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com',
      animation: 'animate__animated animate__fadeInTopRight'
    }
  ]
}