export class InfoAccountUserDto {
  private constructor(public id: number) {}

  static create(object: {
    [key: string]: any;
  }): [string?, InfoAccountUserDto?] {
    const { id } = object;

    if (!id) return ["Missing id"];

    return [undefined, new InfoAccountUserDto(id)];
  }
}
