import { Component, OnInit } from '@angular/core';
import { SkillState } from '../../state/skill.state';
import { Select, Store } from '@ngxs/store';
import { GetSkills, GetSkill } from '../../actions/skill.actions';
import { Observable } from 'rxjs';
import { Skill } from '../../model/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Select(SkillState.getAllSkills) skills$: Observable<Skill[]>;

  constructor(private store: Store) {}

  public encodeURL(url: string): string {
    console.log(encodeURIComponent(url));
    return encodeURIComponent(url);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetSkills());
  }
}
