//Таблица Результат_КатегорииСписок
export const CATEGORIES_TABLE = "CATEGORIES";// имя

export const CATEGORIES_COLUMN_ID = "CATEGORIES_ID";
export const CATEGORIES_COLUMN_NAME = "CATEGORIES_NAME";
export const CATEGORIES_COLUMN_CLASS_ID = "CATEGORIES_CLASS_ID";
export const CATEGORIES_COLUMN_FULLNAME = "CATEGORIES_FULLNAME";
export const CATEGORIES_COLUMN_COLOR = "CATEGORIES_COLOR";
export const CATEGORIES_COLUMN_HEX_COLOR = "CATEGORIES_HEX_COLOR";
export const CATEGORIES_COLUMN_RIC = "RIC_ID";

//Запрос для создания таблицы категорий
export const CREATE_CATEGORIES_TABLE =
    "CREATE TABLE IF NOT EXISTS " + CATEGORIES_TABLE + " ("
    + CATEGORIES_COLUMN_ID + " INTEGER, "
    + CATEGORIES_COLUMN_CLASS_ID + " INTEGER, "
    + CATEGORIES_COLUMN_NAME + " VARCHAR(255), "
    + CATEGORIES_COLUMN_HEX_COLOR + " VARCHAR(255), "
    + CATEGORIES_COLUMN_COLOR + " INTEGER, "
    + CATEGORIES_COLUMN_FULLNAME + " VARCHAR(255), "
    + CATEGORIES_COLUMN_RIC + " INTEGER, "
    + " PRIMARY KEY (" + CATEGORIES_COLUMN_ID + ", " + CATEGORIES_COLUMN_RIC + "))";

//Добавить в таблицу Результат_КатегорииСписок
export const INSERT_CATEGORIES_TABLE =
    "INSERT INTO " + CATEGORIES_TABLE
    + " (" + CATEGORIES_COLUMN_ID + ", "
    + CATEGORIES_COLUMN_CLASS_ID + ", "
    + CATEGORIES_COLUMN_NAME + ", "
    + CATEGORIES_COLUMN_HEX_COLOR + ", "
    + CATEGORIES_COLUMN_COLOR + ", "
    + CATEGORIES_COLUMN_FULLNAME + ", "
    + CATEGORIES_COLUMN_RIC + ")"
    + " VALUES ";

//------------------------------------------------------------------\\

//Таблица РезультатПлитки
export const RESULT_TILE_TABLE = "TILE"; // имя

export const TILE_COLUMN_ID = "TILE_ID";
export const TILE_COLUMN_CLASS_ID = "TILE_CLASS_ID";
export const TILE_COLUMN_INDICATOR_ID_VALUE = "TILE_INDICATOR_ID_VALUE";
export const TILE_COLUMN_ADDITIONAL_CHARTS = "TILE_ADDITIONAL_CHARTS";
export const TILE_COLUMN_UNITS_OF_MEASUREMENT = "TILE_UNITS_OF_MEASUREMENT";
export const TILE_COLUMN_DEFAULT_GRAPH = "TILE_DEFAULT_GRAPH";
export const TILE_COLUMN_FULLNAME = "TILE_FULLNAME";
export const TILE_COLUMN_CATEGORY_ID = "TILE_CATEGORY_ID";
export const TILE_COLUMN_RIC = "RIC_ID";

//Запрос для создания таблицы Плиток
export const CREATE_TILE_TABLE =
    "CREATE TABLE IF NOT EXISTS " + RESULT_TILE_TABLE
    + " (" + TILE_COLUMN_ID + " INTEGER, "
    + TILE_COLUMN_CLASS_ID + " INTEGER, "
    + TILE_COLUMN_INDICATOR_ID_VALUE + " INTEGER, "
    + TILE_COLUMN_ADDITIONAL_CHARTS + " VARCHAR(255), "
    + TILE_COLUMN_UNITS_OF_MEASUREMENT + " VARCHAR(255), "
    + TILE_COLUMN_DEFAULT_GRAPH + " INTEGER, "
    + TILE_COLUMN_FULLNAME + " VARCHAR(255), "
    + TILE_COLUMN_CATEGORY_ID + " INTEGER, "
    + TILE_COLUMN_RIC + " INTEGER, "
    + " PRIMARY KEY (" + TILE_COLUMN_ID + ", " + TILE_COLUMN_RIC + "))";

//Добавить в таблицу РезультатПлитки
export const INSERT_TILE_TABLE =
    "INSERT INTO " + RESULT_TILE_TABLE
    + " (" + TILE_COLUMN_ID + ", "
    + TILE_COLUMN_CLASS_ID + ", "
    + TILE_COLUMN_INDICATOR_ID_VALUE + ", "
    + TILE_COLUMN_ADDITIONAL_CHARTS + ", "
    + TILE_COLUMN_UNITS_OF_MEASUREMENT + ", "
    + TILE_COLUMN_DEFAULT_GRAPH + ", "
    + TILE_COLUMN_FULLNAME + ", "
    + TILE_COLUMN_CATEGORY_ID + ", "
    + TILE_COLUMN_RIC + ") "
    + "VALUES "

//------------------------------------------------------------------\\

//Таблица Результат_ПоказателиСписок
export const RESULT_INDICATORS_LIST_TABLE = "INDICATORS_LIST"; // имя

export const INDICATORS_LIST_COLUMN_ID = "INDICATORS_LIST_ID";
export const INDICATORS_LIST_COLUMN_CLASS_ID = "INDICATORS_LIST_CLASS_ID";
export const INDICATORS_LIST_COLUMN_NAME = "INDICATORS_LIST_NAME";
export const INDICATORS_LIST_COLUMN_SHORT_NAME = "INDICATORS_LIST_SHORT_NAME";
export const INDICATORS_LIST_COLUMN_FULLNAME = "INDICATORS_LIST_FULLNAME";
export const INDICATORS_LIST_COLUMN_UNITS_OF_MEASUREMENT = "INDICATORS_LIST_UNITS_OF_MEASUREMENT";
export const INDICATORS_LIST_COLUMN_DESCRIPTION = "INDICATORS_LIST_DESCRIPTION";
export const INDICATORS_LIST_COLUMN_INPUT = "INDICATORS_LIST_INPUT";

//Запрос для создания таблицы Результат_ПоказателиСписок
export const CREATE_INDICATORS_LIST_TABLE =
    "CREATE TABLE IF NOT EXISTS " + RESULT_INDICATORS_LIST_TABLE
    + " (" + INDICATORS_LIST_COLUMN_ID + " INTEGER, "
    + INDICATORS_LIST_COLUMN_CLASS_ID + " INTEGER, "
    + INDICATORS_LIST_COLUMN_NAME + " VARCHAR(255), "
    + INDICATORS_LIST_COLUMN_SHORT_NAME + " VARCHAR(255), "
    + INDICATORS_LIST_COLUMN_FULLNAME + " VARCHAR(255), "
    + INDICATORS_LIST_COLUMN_UNITS_OF_MEASUREMENT + " VARCHAR(255), "
    + INDICATORS_LIST_COLUMN_DESCRIPTION + " VARCHAR(255), "
    + INDICATORS_LIST_COLUMN_INPUT + " INTEGER, "
    + " PRIMARY KEY (" + INDICATORS_LIST_COLUMN_ID + "))";

//Добавить в таблицу Результат_ПоказателиСписок
export const INSERT_INDICATORS_LIST_TABLE =
    "INSERT INTO " + RESULT_INDICATORS_LIST_TABLE
    + " (" + INDICATORS_LIST_COLUMN_ID + ", "
    + INDICATORS_LIST_COLUMN_CLASS_ID + ", "
    + INDICATORS_LIST_COLUMN_NAME + ", "
    + INDICATORS_LIST_COLUMN_SHORT_NAME + ", "
    + INDICATORS_LIST_COLUMN_FULLNAME + ", "
    + INDICATORS_LIST_COLUMN_UNITS_OF_MEASUREMENT + ", "
    + INDICATORS_LIST_COLUMN_DESCRIPTION + ", "
    + INDICATORS_LIST_COLUMN_INPUT + ") "
    + "VALUES ";

//------------------------------------------------------------------\\

//Таблица Результат_ГрафикиСписок
export const RESULT_GRAPHICS_LIST_TABLE = "GRAPHICS"; // имя

export const GRAPHICS_COLUMN_ID = "GRAPHICS_ID"
export const GRAPHICS_COLUMN_CLASS_ID = "GRAPHICS_CLASS_ID";
export const GRAPHICS_COLUMN_GENERAL_GRAPH_TYPE = "GRAPHICS_GENERAL_GRAPH_TYPE";
export const GRAPHICS_COLUMN_PERIODICITY = "GRAPHICS_PERIODICITY";
export const GRAPHICS_COLUMN_DEFAULT_PERIOD_NAME = "GRAPHICS_DEFAULT_PERIOD_NAME";
export const GRAPHICS_COLUMN_DEFAULT_PERIOD_SIZE = "GRAPHICS_DEFAULT_PERIOD_SIZE";
export const GRAPHICS_COLUMN_TABULAR_DISPLAY = "GRAPHICS_TABULAR_DISPLAY";
export const GRAPHICS_COLUMN_QUICK_ACCESS = "GRAPHICS_QUICK_ACCESS";
export const GRAPHICS_COLUMN_FULLNAME = "GRAPHICS_FULLNAME";
export const GRAPHICS_COLUMN_TYPE_GRAPH = "GRAPHICS_TYPE_GRAPH";
export const GRAPHICS_COLUMN_COMMENT = "GRAPHICS_COMMENT";

//Запрос для создания таблицы Результат_ГрафикиСписок
export const CREATE_GRAPHICS_TABLE =
    "CREATE TABLE IF NOT EXISTS " + RESULT_GRAPHICS_LIST_TABLE
    + " (" + GRAPHICS_COLUMN_ID + " INTEGER, "
    + GRAPHICS_COLUMN_CLASS_ID + " INTEGER, "
    + GRAPHICS_COLUMN_GENERAL_GRAPH_TYPE + " VARCHAR(255), "
    + GRAPHICS_COLUMN_PERIODICITY + " VARCHAR(255), "
    + GRAPHICS_COLUMN_DEFAULT_PERIOD_NAME + " VARCHAR(255), "
    + GRAPHICS_COLUMN_DEFAULT_PERIOD_SIZE + " INTEGER, "
    + GRAPHICS_COLUMN_TABULAR_DISPLAY + " INTEGER, "
    + GRAPHICS_COLUMN_QUICK_ACCESS + " INTEGER, "
    + GRAPHICS_COLUMN_FULLNAME + " VARCHAR(255), "
    + GRAPHICS_COLUMN_TYPE_GRAPH + " VARCHAR(255), "
    + GRAPHICS_COLUMN_COMMENT + " VARCHAR(255),"
    + " PRIMARY KEY (" + GRAPHICS_COLUMN_ID + "))"

//Добавить в таблицу Результат_ГрафикиСписок
export const INSERT_GRAPHICS_TABLE =
    "INSERT INTO " + RESULT_GRAPHICS_LIST_TABLE
    + " (" + GRAPHICS_COLUMN_ID + ", "
    + GRAPHICS_COLUMN_CLASS_ID + ", "
    + GRAPHICS_COLUMN_GENERAL_GRAPH_TYPE + ", "
    + GRAPHICS_COLUMN_PERIODICITY + ", "
    + GRAPHICS_COLUMN_DEFAULT_PERIOD_NAME + ", "
    + GRAPHICS_COLUMN_DEFAULT_PERIOD_SIZE + ", "
    + GRAPHICS_COLUMN_TABULAR_DISPLAY + ", "
    + GRAPHICS_COLUMN_QUICK_ACCESS + ", "
    + GRAPHICS_COLUMN_FULLNAME + ", "
    + GRAPHICS_COLUMN_TYPE_GRAPH + ", "
    + GRAPHICS_COLUMN_COMMENT + ") "
    + "VALUES ";

//------------------------------------------------------------------\\

//Таблица связи между Показателями и графиками
export const GRAPHICS_INDICATORS_TABLE = "GRAPHICS_INDICATORS";

export const GRAPHICS_INDICATORS_COLUMN_INDICATORS_ID = 'GRAPHICS_INDICATORS_INDICATORS_ID';
export const GRAPHICS_COLUMN_GRAPHICS_INDICATORS_ID = 'GRAPHICS_COLUMN_GRAPHICS_INDICATORS_ID';

//Создание таблицы связи между Показателями и графиками 
export const CREATE_GRAPHICS_INDICATORS_TABLE =
    "CREATE TABLE IF NOT EXISTS " + GRAPHICS_INDICATORS_TABLE
    + " (" + GRAPHICS_INDICATORS_COLUMN_INDICATORS_ID + " INTEGER, "
    + GRAPHICS_COLUMN_GRAPHICS_INDICATORS_ID + " INTEGER, "
    + " PRIMARY KEY (" + GRAPHICS_INDICATORS_COLUMN_INDICATORS_ID + ", "
    + GRAPHICS_COLUMN_GRAPHICS_INDICATORS_ID + "))";

//Запрос для добавления в таблицу связи Графиков и Показателей
export const INSERT_GRAPHICS_INDICATORS_TABLE =
    "INSERT INTO " + GRAPHICS_INDICATORS_TABLE
    + " (" + GRAPHICS_INDICATORS_COLUMN_INDICATORS_ID + ", "
    + GRAPHICS_COLUMN_GRAPHICS_INDICATORS_ID + ") "
    + "VALUES ";


// //Таблица поля ПоказателиСписок
// export const INDICATORS_LIST_TABLE = "INDICATORS"; // имя

// export const INDICATORS_COLUMN_ID_ELEM = "INDICATORS_ID_ELEM";
// export const INDICATORS_COLUMN_CLASS_ID = "INDICATORS_CLASS_ID";
// export const INDICATORS_COLUMN_ID = "INDICATORS_ID";
// export const INDICATORS_COLUMN_CLASS = "INDICATORS_CLASS";
// export const INDICATORS_COLUMN_UNITS_OF_MEASUREMENT = "INDICATORS_UNITS_OF_MEASUREMENT";
// export const INDICATORS_COLUMN_NAME = "INDICATORS_NAME";
// export const INDICATORS_COLUMN_FULLNAME = "INDICATORS_FULLNAME";
// export const INDICATORS_COLUMN_INPUT = "INDICATORS_INPUT";


// //Запрос для создания таблицы ПоказателиСписок
// export const CREATE_INDICATORS_TABLE =
//     "CREATE TABLE IF NOT EXISTS " + INDICATORS_LIST_TABLE
//     + " (" + INDICATORS_COLUMN_ID_ELEM + " INTEGER, "
//     + INDICATORS_COLUMN_CLASS_ID + " INTEGER, "
//     + INDICATORS_COLUMN_ID + " INTEGER, "
//     + INDICATORS_COLUMN_CLASS + " INTEGER, "
//     + INDICATORS_COLUMN_UNITS_OF_MEASUREMENT + " VARCHAR(255), "
//     + INDICATORS_COLUMN_NAME + " VARCHAR(255), "
//     + INDICATORS_COLUMN_FULLNAME + " VARCHAR(255), "
//     + INDICATORS_COLUMN_INPUT + " INTEGER,"
//     + " PRIMARY KEY (" + INDICATORS_COLUMN_ID + "))";

// //Запрос для добавления в таблицу ПоказателиСписок

// export const INSERT_INDICATORS_TABLE =
//     "INSERT INTO " + INDICATORS_LIST_TABLE
//     + " (" + INDICATORS_COLUMN_ID_ELEM + ", "
//     + INDICATORS_COLUMN_ID + ", "
//     + INDICATORS_COLUMN_CLASS_ID + ", "
//     + INDICATORS_COLUMN_CLASS + ", "
//     + INDICATORS_COLUMN_UNITS_OF_MEASUREMENT + ", "
//     + INDICATORS_COLUMN_NAME + ", "
//     + INDICATORS_COLUMN_FULLNAME + ", "
//     + INDICATORS_COLUMN_INPUT + ") "
//     + "VALUES (?,?,?,?,?,?,?,?)";


//Таблица поля РазрезыСписок
export const SECTIONS_LIST_TABLE = "SECTIONS"; // имя 

export const SECTION_COLUMN_ELEM_ID = "SECTION_ELEM_ID";
export const SECTIONS_COLUMN_ID = "SECTIONS_ID";
export const SECTIONS_COLUMN_CLASS_ID = "SECTIONS_CLASS_ID";
export const SECTIONS_COLUMN_NAME = "SECTIONS_NAME";
export const SECTIONS_COLUMN_FULLNAME = "SECTIONS_FULLNAME";

//Запрос для созданяи таблицы РазрезыСписок
export const CREATE_SECTIONS_TABLE =
    "CREATE TABLE IF NOT EXISTS " + SECTIONS_LIST_TABLE
    + " (" + SECTIONS_COLUMN_CLASS_ID + " INTEGER, "
    + SECTIONS_COLUMN_NAME + " VARCHAR(255), "
    + SECTIONS_COLUMN_FULLNAME + " VARCHAR(255), "
    + SECTIONS_COLUMN_ID + " INTEGER, "
    + " PRIMARY KEY (" + SECTIONS_COLUMN_ID + "))";


//Запрос для добавления в таблицу РазрезыСписок
export const INSERT_SECTIONS_TABLE =
    "INSERT INTO " + SECTIONS_LIST_TABLE
    + " (" + SECTIONS_COLUMN_CLASS_ID + ", "
    + SECTIONS_COLUMN_NAME + ", "
    + SECTIONS_COLUMN_FULLNAME + ", "
    + SECTIONS_COLUMN_ID + ") "
    + "VALUES "

//------------------------------------------------------------------\\

//Таблица связи между Графиками и Разрезами
export const GRAPHICS_SECTIONS_TABLE = "GRAPHICS_SECTIONS";

export const GRAPHICS_SECTIONS_COLUMN_SECTIONS_ID = 'GRAPHICS_SECTIONS_SECTIONS_ID';
export const GRAPHICS_COLUMN_GRAPHICS_ID = 'GRAPHICS_COLUMN_GRAPHICS_ID';

//Создание таблицы связи между Разрезами и графиками 
export const CREATE_GRAPHICS_SECTIONS_TABLE =
    "CREATE TABLE IF NOT EXISTS " + GRAPHICS_SECTIONS_TABLE
    + " (" + GRAPHICS_SECTIONS_COLUMN_SECTIONS_ID + " INTEGER, "
    + GRAPHICS_COLUMN_GRAPHICS_ID + " INTEGER, "
    + " PRIMARY KEY (" + GRAPHICS_SECTIONS_COLUMN_SECTIONS_ID + ", "
    + GRAPHICS_COLUMN_GRAPHICS_ID + "))";


//Запрос для добавления в таблицу связи Графиков и Разрезов
export const INSERT_GRAPHICS_SECTIONS_TABLE =
    "INSERT INTO " + GRAPHICS_SECTIONS_TABLE
    + " (" + GRAPHICS_SECTIONS_COLUMN_SECTIONS_ID + ", "
    + GRAPHICS_COLUMN_GRAPHICS_ID + ") "
    + "VALUES ";

//------------------------------------------------------------------\\

//Таблица актуальных значений плиток
export const CURRENT_TILE_VALUES_TABLE = 'TILE_VALUES';

export const CURRENT_TILE_VALUES_COLUMN_ID = 'CURRENT_TILE_VALUES_ID';
export const CURRENT_TILE_VALUES_COLUMN_VALUE = 'CURRENT_TILE_VALUES_VALUE';
export const CURRENT_TILE_VALUES_COLUMN_DATE = 'CURRENT_TILE_VALUES_DATE';

//Создать таблицу актуальных значений плиток
export const CREATE_CURRENT_TILE_VALUES_TABLE =
    "CREATE TABLE IF NOT EXISTS " + CURRENT_TILE_VALUES_TABLE
    + " (" + CURRENT_TILE_VALUES_COLUMN_ID + " INTEGER, "
    + CURRENT_TILE_VALUES_COLUMN_VALUE + " VARCHAR(255), "
    + CURRENT_TILE_VALUES_COLUMN_DATE + " VARCHAR(255), "
    + " PRIMARY KEY (" + CURRENT_TILE_VALUES_COLUMN_ID + "))";

//Вставить в таблицу актуальных значений плиток
export const INSERT_CURRENT_TILE_VALUES_TABLE =
    "INSERT INTO " + CURRENT_TILE_VALUES_TABLE
    + " (" + CURRENT_TILE_VALUES_COLUMN_ID + ", "
    + CURRENT_TILE_VALUES_COLUMN_VALUE + ", "
    + CURRENT_TILE_VALUES_COLUMN_DATE + ") "
    + "VALUES (?,?,?)";