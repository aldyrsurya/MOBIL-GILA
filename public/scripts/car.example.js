class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    const biaya = rupiah(this.rentPerDay);
    return `
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <div class="card mx-0 my-4 g-0"  style="width: 18rem;">
    <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 190px; object-fit: cover" />
        <div class="card-body" style="font-size: 14px">
            <p class="card-title">${this.manufacture} ${this.model}</p>
            <p class="fw-bold">${biaya} / hari</p>
            <p class="card-text" style="height: 90px">${this.description}</p>
            <div class="my-2"><img class="img-fluid" src="assets/img/fi_users.png"><i class="me-2"></i>${this.capacity} Orang</div>
            <div class="my-2"><img class="img-fluid" src="assets/img/fi_settings.png"><i class="me-2"></i>${this.transmission}</div>
            <div class="my-2"><img class="img-fluid" src="assets/img/fi_calendar.png"><i class="me-2"></i>${this.year}</div>
            <a href="#" class="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style="font-size: 14px">Pilih Mobil</a>
        </div>
    </div>
</div>
</div>
`;
  }
}
