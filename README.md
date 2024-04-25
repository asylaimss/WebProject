# WebProject

# BIZBAZAAR
Online Shop App
It is a simple product catalog application that allows users to watch and buy electronics products online.

## Project context
BIZBAZAAR was created as a Web-development attestation command project.

# Table of Contents
1. [Project members](#project-members)
2. [API Endpoints](#api-endpoints)
3. [Database Structure](#database-structure)


# Project Members
| Full Name | ID |
|------------|-------------|
| Sarkyt Assylay   | 22B0303585    |
| Suanbekova Aisha  | 22B030589    |
| Grents Artemiy  | 22B031246    |

# API Endpoints
- /api/products - List of all Products
- /api/products/<int:id>/ - Get one Product
- /api/categories/ - List of all Categories
- /api/categories/<int:id>/ - Get one Category
- /api/categories/<int:id>/products/ - List of Products by Category

## Database Structure
The database structure includes the following models:
- Product
  - name (CharField)
  - price (FloatField)
  - description (TextField)
  - count (IntegerField)
  - is_active (BooleanField)
- Category
  - name (CharField)
