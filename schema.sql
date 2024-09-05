create table Users (
    UserID int primary key,
    Name varchar(100),
    Email varchar(100) unique,
    Password varchar(255),
    PhoneNumber varchar(20)
);

create table Events (
    EventID int primary key,
    Name varchar(100),
    Description text,
    EventType ENUM('movie', 'comedy', 'show')
);

create table Venues (
    VenueID int primary key,
    Name varchar(100),
    Address text,
    City varchar(50)
);

-- Junction table to map manuy to many relationship
create table EventSchedules (
    ScheduleID int primary key,
    EventID int,
    VenueID int,
    Date DATE,
    StartTime TIME,
    EndTime TIME,
    foreign key (EventID) references Events(EventID),
    foreign key (VenueID) references Venues(VenueID)
);

create table SeatCategories (
    CategoryID int primary key,
    Name varchar(50),
    Description text
);

create table Seats (
    SeatID int primary key,
    ScheduleID int,
    CategoryID int,
    SeatNumber varchar(10),
    Status ENUM('available', 'booked', 'locked') DEFAULT 'available',
    foreign key (ScheduleID) references EventSchedules(ScheduleID),
    foreign key (CategoryID) references SeatCategories(CategoryID)
);

create table Pricing (
    PricingID int primary key,
    ScheduleID int,
    CategoryID int,
    Price Decimal(10, 2),
    foreign key (ScheduleID) references EventSchedules(ScheduleID),
    foreign key (CategoryID) references SeatCategories(CategoryID)
);

-- my NV and V design choice: one high level description for Lead and low level details for intern, one booking entry for 3 seats

create table Bookings (
    BookingID int primary key,
    UserID int,
    ScheduleID int,
    BookingDate DATETIME,
    TotalAmount Decimal(10, 2),
    Status ENUM('pending', 'confirmed', 'cancelled'),
    foreign key (UserID) references Users(UserID),
    foreign key (ScheduleID) references EventSchedules(ScheduleID)
);


-- 3 entries for 3 seats
create table BookingDetails (
    BookingDetailID int primary key,
    BookingID int,
    SeatID int,
    Price Decimal(10, 2),
    foreign key (BookingID) references Bookings(BookingID),
    foreign key (SeatID) references Seats(SeatID)
);

create table Payments (
    PaymentID int primary key,
    BookingID int,
    Amount Decimal(10, 2),
    PaymentMethod ENUM('credit_card', 'debit_card', 'net_banking', 'upi'),
    PaymentStatus ENUM('pending', 'successful', 'failed'),
    TransactionID varchar(100),
    foreign key (BookingID) references Bookings(BookingID)
);

create table Notifications (
    NotificationID int primary key,
    UserID int,
    Message text,
    Type ENUM('booking_confirmation','cancelation'),
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    foreign key (UserID) references Users(UserID)
);