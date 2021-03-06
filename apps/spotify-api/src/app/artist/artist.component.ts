import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../shared/spotify.service';
import { Artist } from '../shared/artist';
import { Album } from '../shared/album';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(map(params => params['id']))
      .subscribe((id) => {
        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          });
        this.spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          });
      });
    }
  }
