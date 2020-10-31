import passport from 'passport';
import passportJwt from 'passport-jwt';
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
import User from '../models/user';
const passportJWTSecret = 'secret';

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: passportJWTSecret,
};
passport.use(
	new JwtStrategy(opts, (JWT_PAYLOAD:any, done:any) => {
		User.findOne({ id: JWT_PAYLOAD.id, email: JWT_PAYLOAD.email }, (err, user) => {
			if (err) {
				return done(err, false);
			}
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	})
);

module.exports = passport;
