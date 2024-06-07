CREATE OR ALTER PROCEDURE createNote(
    @id VARCHAR(255),
    @Title VARCHAR(255),
    @Content VARCHAR(255),
    @CreatedAt VARCHAR(255)
)

AS
BEGIN
    INSERT INTO notes(id, Title, Content, CreatedAt)
    VALUES(@id, @Title, @Content, @CreatedAt)
END    