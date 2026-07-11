using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using vinayankhospitalkodinar.Data;
using vinayankhospitalkodinar.Models;

namespace vinayankhospitalkodinar.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;

        public HomeController(
            ILogger<HomeController> logger,
            ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            var reviews = _context.Reviews
                                  .OrderByDescending(x => x.CreatedAt)
                                  .ToList();

            return View(reviews);
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Doctors()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }

        public IActionResult Gallery()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult TermsofService()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult BookAppointment(Appointment model)
        {
            if (!ModelState.IsValid)
            {
                return View("Contact", model);
            }

            model.CreatedAt = DateTime.Now;

            _context.Appointments.Add(model);
            _context.SaveChanges();

            TempData["SuccessMessage"] = "Your appointment has been booked successfully. We will contact you shortly.";

            return RedirectToAction("Contact");
        }

        // ===================== REVIEW =====================

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AddReview(Review review)
        {
            if (!ModelState.IsValid)
            {
                TempData["ReviewError"] = "Please fill all required fields correctly.";
                return RedirectToAction("Index");
            }

            review.CreatedAt = DateTime.Now;

            // Automatically approve review
            review.IsApproved = true;

            _context.Reviews.Add(review);
            _context.SaveChanges();

            TempData["ReviewSuccess"] = "Thank you for your valuable feedback! Your review has been published successfully.";

            return RedirectToAction("Index");
        }

        public IActionResult Appointments()
        {
            var appointments = _context.Appointments
                                       .OrderByDescending(x => x.Id)
                                       .ToList();

            return View(appointments);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
            });
        }
    }
}