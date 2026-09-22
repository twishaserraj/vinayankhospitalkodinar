using System.ComponentModel.DataAnnotations;

namespace vinayankhospitalkodinar.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        [Required]
        public string ?FullName { get; set; }

        [Required]
        public string ?MobileNumber { get; set; }

        [Required]
        public string ?Email { get; set; }

        [Required]
        public string ?DoctorName { get; set; }

        [Required]
        public DateTime AppointmentDate { get; set; }

        public string? Message { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}







