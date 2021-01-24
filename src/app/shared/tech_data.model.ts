
// API Technologies Data Schema
export class TechData {
  constructor(
    public name: string,
    public total_users: number,
    public usage_count: number,
    public usage_points: number,
    public popularity: number
  ) {}
}
