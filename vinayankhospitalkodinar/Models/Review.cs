using System.ComponentModel.DataAnnotations;

namespace vinayankhospitalkodinar.Models
{
    public class Review
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Full Name is required.")]
        [StringLength(100)]
        public string FullName { get; set; } = string.Empty;

        [StringLength(100)]
        public string? City { get; set; }

        [Required(ErrorMessage = "Please select a rating.")]
        [Range(1, 5)]
        public int Rating { get; set; }

        [Required(ErrorMessage = "Review message is required.")]
        [StringLength(1000)]
        public string ReviewMessage { get; set; } = string.Empty;

        // Automatically approved
        public bool IsApproved { get; set; } = true;

        // Automatically set current date & time
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}