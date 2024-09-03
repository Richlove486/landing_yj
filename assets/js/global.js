let user_list = [];

$(window).on('load', function () {
    user_list = [
        {
            user_comment: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
            user_img: './assets/images/img_profile01.png',
            user_id: 'Alex Rivera',
            user_tag: '@jamietechguru00',
        },
        {
            user_comment: 'Our team’s productivity has skyrocketed since we started using this tool. ',
            user_img: './assets/images/img_profile04.png',
            user_id: 'Josh Smith',
            user_tag: '@jjsmith',
        },
        {
            user_comment: 'This app has completely transformed how I manage my projects and deadlines.',
            user_img: './assets/images/img_profile07.png',
            user_id: 'Morgan Lee',
            user_tag: '@morganleewhiz',
        },
        {
            user_comment: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
            user_img: './assets/images/img_profile02.png',
            user_id: 'Casey Jordan',
            user_tag: '@caseyj',
        },
        {
            user_comment: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
            user_img: './assets/images/img_profile05.png',
            user_id: 'Taylor Kim',
            user_tag: '@taylorkimm',
        },
        {
            user_comment: 'The customizability and integration capabilities of this app are top-notch.',
            user_img: './assets/images/img_profile08.png',
            user_id: 'Riley Smith',
            user_tag: '@rileysmith1',
        },
        {
            user_comment: 'Adopting this app for our team has streamlined our project management and improved communication the board. ',
            user_img: './assets/images/img_profile03.png',
            user_id: 'Jordan Patels',
            user_tag: '@jpatelsdesign',
        },
        {
            user_comment: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
            user_img: './assets/images/img_profile06.png',
            user_id: 'Sam Dawson',
            user_tag: '@dawsontechtips',
        },
        {
            user_comment: 'Its user-friendly interface and robust features support our diverse needs.',
            user_img: './assets/images/img_profile09.png',
            user_id: 'Casey Harper',
            user_tag: '@casey09',
        },
    ];

    target = $('#userList');

    user_list.forEach((item, index) => {
        let user = $('#userItem').clone();

        $(user).removeAttr('id');
        $(user).find('.user_comment').text(item.user_comment);
        $(user).find('.user_profile_img img').attr('src', item.user_img);
        $(user).find('.user_name b').text(item.user_id);
        $(user).find('.user_name span').text(item.user_tag);

        $(target).append($(user));
    });

    $('.user_list > li:first-child').hide();
});
