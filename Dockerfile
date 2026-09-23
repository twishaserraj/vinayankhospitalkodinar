FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY . .

RUN dotnet restore "./vinayankhospitalkodinar/vinayankhospitalkodinar.csproj"

RUN dotnet publish "./vinayankhospitalkodinar/vinayankhospitalkodinar.csproj" \
    -c Release \
    -o /app/publish \
    --no-restore \
    --no-self-contained

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080

ENTRYPOINT ["dotnet", "vinayankhospitalkodinar.dll"]
