import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(public http: HttpClient) {}

  getSkills() {
    console.log('SkillService: Making get request...');
    return this.http.get<Skill[]>('http://localhost:3000/skills/');
  }

  getSkill(id: number) {
    console.log('SkillService: Making get request...');
    return this.http.get<Skill>(`http://localhost:3000/skills/${id}`);
  }
}
