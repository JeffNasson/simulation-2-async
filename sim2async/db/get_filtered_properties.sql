SELECT *
FROM properties
WHERE desired_rent > $1 and user_id=$2;