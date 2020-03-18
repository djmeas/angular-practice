export function generateSkill(level: number): string {
  const skillNames = [
    'None',
    'Beginner',
    'Novice',
    'Intermediate',
    'Advanced',
    'Expert'
  ];
  return skillNames[level];
}
