export declare class RankCard {
  constructor(options?: {
    name?: string;
    color?: string;
    avatar?: string;
    level?: string;
    rank?: string;
    brightness?: number;
    progress?: number;
    currentXp?: string;
    requiredXp?: string;
    showXp?: boolean;
  });

  public setName(name: string): this;
  public setColor(color: string): this;
  public setAvatar(avatar: string): this;
  public setLevel(level: string): this;
  public setRank(rank: string): this;
  public setBrightness(brightness: number): this;
  public setProgress(progress: number): this;
  public setCurrentXp(currentXp: string): this;
  public setRequiredXp(requiredXp: string): this;
  public setShowXp(showXp: boolean): this;

public build(): Promise<Buffer>;

 
}
