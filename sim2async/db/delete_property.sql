DELETE 
FROM properties
WHERE user_id=$1 and id=$2;

SELECT * FROM properties WHERE user_id=$1;