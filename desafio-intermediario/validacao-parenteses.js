var string = gets().split('');

switch (string[0]) {
    case '(':
        if (string[1] == ')') {
            print('true');
        } else {
            print('false');
        }
        break;

    case '[':
        if (string[1] == ']') {
            print('true');
        } else {
            print('false');
        }
        break;

    case '{':
        if (string[1] == '}') {
            print('true');
        } else {
            print('false');
        }
        break;

    default:
        print('false');
        break;
}
