FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY . .

# Find the .csproj file anywhere in the repository
RUN PROJECT=$(find . -name "*.csproj" -type f | head -n 1) && \
    echo "Found project: $PROJECT" && \
    dotnet restore "$PROJECT"

# Publish the project
RUN PROJECT=$(find . -name "*.csproj" -type f | head -n 1) && \
    dotnet publish "$PROJECT" -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080

ENTRYPOINT ["sh", "-c", "dotnet $(find /app -maxdepth 1 -name '*.dll' -type f | head -n 1)"]
