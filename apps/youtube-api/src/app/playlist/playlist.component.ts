import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../shared/playlist.service';
import { Snippet } from '../shared/snippet.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private playlistService: PlaylistService) { }
  currentPlaylist: Snippet;
  playlist: Snippet[];

  ngOnInit() {
    this.displayPlaylist();
    this.level();
  }

  displayPlaylist() {
    this.playlistService.getPlaylist()
      .subscribe(playlist => this.playlist = playlist);
  }

  selectVideo(snippet) {
    this.currentPlaylist = snippet;
    console.log(snippet);
  }

  removeVideo() {
    alert(`your video will removed`);
    console.log('DELETING');
  }

  saveVideo() {
    alert(`saving your video`)
    console.log('SAVING');
  }

  cancel(snippet) {
    this.reset();
  }

  reset() {
    this.currentPlaylist =
      { channelTitle: '', description: '', publishedAt: '', thumbnails: {}, title: ''};
  }

  level() {
    this.playlistService.getLevel()
      .subscribe(res => console.log(res));
  }
}
