import Database from "better-sqlite3"
const db = new Database('database.db')


db.exec(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT not null,
    icon TEXT,
    imgURL TEXT,
    message TEXT
) `)


db.exec(`
    INSERT into messages (name, icon, imgURL, message)
    VALUES
    ('Mina','🐼', 'https://posters.movieposterdb.com/09_03/2009/892782/l_892782_3af93e38.jpg','hi bob'),
    ('Ishan','🐬' , 'https://posters.movieposterdb.com/08_12/2003/266543/s_266543_535dfe6a.jpg','up UP and Away'),
    ('Melodie', '🦀', 'https://posters.movieposterdb.com/12_09/2012/1446192/l_1446192_30f27414.jpg', 'Ice ice baby'),
    ('Karima', '🐳' , 'https://posters.movieposterdb.com/08_12/2003/266543/s_266543_535dfe6a.jpg','Just keep swimming')
`)