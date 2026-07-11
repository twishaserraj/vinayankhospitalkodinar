using Microsoft.EntityFrameworkCore;
using vinayankhospitalkodinar.Models;

namespace vinayankhospitalkodinar.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Appointment> Appointments { get; set; }

        public DbSet<Review> Reviews { get; set; }
    }
}