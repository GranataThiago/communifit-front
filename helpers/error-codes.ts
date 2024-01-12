export const errorCodes: {[keyof: string]: string} = {
    'default': "Oops, something went wrong.",
    'something_went_wrong': "Oops, something went wrong.",
    'invalid_code': "Invalid code.",
    'invalid_user': "Invalid user.",
    'unauthorized': "Unauthorized.",
    'password_must_match': "password and confirmPassword must match.",
    'password_not_provided': "Password not provided.",
    'password_invalid_type': "Password is not valid.",
    'password_invalid_format': "Password is not valid. Please, the password must be as follows: min length 8 characters, min one uppercase, min one lowercase, min 2 digits and don't use spaces.",
    'user_already_in_a_community': "User is already in a community.",
    'no_planid_provided': "Plan ID is required.",
    'invalid_plan_id': "Plan ID is not a valid type of id.",
    'plan_already_deleted': 'That plan is already deleted.',
    'user_has_already_a_plan': "User has already a plan.",
    'id_not_provided': "ID is required"
}