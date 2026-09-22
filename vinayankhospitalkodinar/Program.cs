using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using vinayankhospitalkodinar.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("HospitalConnection")));

// Response Compression
builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

// Response Compression
app.UseResponseCompression();

// Static Files + Browser Cache
app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = ctx =>
    {
        // Cache static files for 30 days
        const int durationInSeconds = 60 * 60 * 24 * 30;

        ctx.Context.Response.Headers[HeaderNames.CacheControl] =
            $"public,max-age={durationInSeconds},immutable";
    }
});

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();