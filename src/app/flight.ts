export class Flight {
    name: string;
    distance: number;
    landed: boolean;
    arrivalTime: string;
    private cruiseSpeed = 520;

  constructor(name = 'unknown', distance = 1000, landed = false) {

    this.name = name;
    this.distance = distance;
    this.landed = landed;

    setInterval(() => this.updateDistance(), 1000);
  }

  updateDistance(): void {
    if (this.landed === true) {
      return;
    }
    this.distance = this.distance - this.cruiseSpeed;
    this.updateArrivalTime(this.distance);

    if (this.distance <= 0) {
      this.distance = 0;
      this.landed = true;
      this.arrivalTime = 'arrived';
    }
  }

  updateArrivalTime(distance: number): void {
    let arrivalTime = Math.floor(distance / this.cruiseSpeed);

    if (arrivalTime < 1) {
      this.arrivalTime = 'under 1 hour';
    } else {
      this.arrivalTime = arrivalTime + ' hours';
    }
  }
}

